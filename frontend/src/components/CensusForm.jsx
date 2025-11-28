import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  DialogActions,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";

function CensusForm() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    gender: "",
    birthdate: "",
    is_vaccinated: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3000/vote", form);
      alert("Entry saved!");
      setOpen(false);
    } catch (err) {
      alert("Error saving entry");
      console.log(err);
    }
  };

  return (
    <>
      <Button variant="contained" size="large" sx={{ borderRadius: "8px" }} onClick={() => setOpen(true)}>
        + Add Census Entry
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Census Entry</DialogTitle>
        <DialogContent sx={{ mt: 1 }}>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <TextField
            select
            label="Gender"
            fullWidth
            margin="dense"
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>

          <TextField
            type="date"
            label="Birthdate"
            fullWidth
            margin="dense"
            name="birthdate"
            value={form.birthdate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={form.is_vaccinated}
                onChange={handleChange}
                name="is_vaccinated"
              />
            }
            label="Vaccinated"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CensusForm;
