import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});
// Save census entry
app.post("/vote", async (req, res) => {
  try {
    const { name, gender, birthdate, is_vaccinated } = req.body;

    if (!name || !gender || !birthdate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newEntry = await prisma.people.create({
      data: {
        name,
        gender,
        birthdate: new Date(birthdate),
        is_vaccinated,
      },
    });

    res.json({ message: "Entry saved", data: newEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all census entries
app.get("/data", async (req, res) => {
  try {
    const entries = await prisma.people.findMany({
      orderBy: {
        id: "desc",
      },
    });

    res.json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


// Vaccinated vs Unvaccinated count by age
app.get("/counts", async (req, res) => {
  try {
    const { is_vaccinated } = req.query;

    const entries = await prisma.people.findMany({
      where: {
        is_vaccinated: is_vaccinated === "true",
      },
    });

    // Calculate age from birthdate
    const counts = {};

    entries.forEach((person) => {
      const age =
        new Date().getFullYear() -
        new Date(person.birthdate).getFullYear();

      if (!counts[age]) counts[age] = 0;
      counts[age]++;
    });

    res.json(counts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


// Gender distribution by age
app.get("/results", async (req, res) => {
  try {
    const entries = await prisma.people.findMany();

    const results = {};

    entries.forEach((person) => {
      const age =
        new Date().getFullYear() -
        new Date(person.birthdate).getFullYear();

      if (!results[age]) {
        results[age] = { male: 0, female: 0, other: 0 };
      }

      const g = person.gender.toLowerCase();
      if (g === "male") results[age].male++;
      else if (g === "female") results[age].female++;
      else results[age].other++;
    });

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
