import { useState } from 'react';
import { FormControl, InputLabel, Stack, TextField, Select, MenuItem, Button } from '@mui/material';
import './contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [numBedrooms, setNumBedrooms] = useState(0);
    const [numBathrooms, setNumBathrooms] = useState(0);
    const [numOtherRooms, setNumOtherRooms] = useState(0);
    const [cleaningType, setCleaningType] = useState(1);


    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
    const handleNumBedroomsChange = (event) => {
        setNumBedrooms(event.target.value);
    };
    const handleNumBathroomsChange = (event) => {
        setNumBathrooms(event.target.value);
    };
    const handleNumOtherRoomsChange = (event) => {
        setNumOtherRooms(event.target.value);
    };
    const handleCleaningTypeChange = (event) => {
        setCleaningType(event.target.value);
    };
    const handleZipCodeChange = (event) => {
        setZipCode(event.target.value);
    };
    const handleSubmit = () => {
        const data = {
            name,
            email,
            phone,
            zipCode,
            numBedrooms,
            numBathrooms,
            numOtherRooms,
            cleaningType
        };
        console.log(data);

        //Put data in some type of email template and then send it
    }

    return (
        <Stack spacing={2}>
            <h1>Contact Us</h1>
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={handleNameChange}
            />
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={handleEmailChange}
            />
            <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                onChange={handlePhoneChange}
            />
            <FormControl>
                <InputLabel id="demo-multiple-name-label">How Many Bedrooms?</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={numBedrooms}
                    label="Bedrooms"
                    onChange={handleNumBedroomsChange}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="demo-multiple-name-label">How Many Bathrooms?</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={numBathrooms}
                    label="How Many Bathrooms?"
                    onChange={handleNumBathroomsChange}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="demo-multiple-name-label">How Many Other Rooms?</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={numOtherRooms}
                    label="Other Rooms?"
                    onChange={handleNumOtherRoomsChange}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="demo-multiple-name-label">Cleaning Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cleaningType}
                    label="Cleaning Type"
                    onChange={handleCleaningTypeChange}
                >
                    <MenuItem value={"fresh-start"}>Fresh Start</MenuItem>
                    <MenuItem value={"radiant-fresh"}>Radiant Refresh</MenuItem>
                    <MenuItem value={"ultimate-sparkle"}>Ultimate Sparkle</MenuItem>
                </Select>
            </FormControl>
            <TextField
                id="outlined-basic"
                label="Zip Code"
                variant="outlined"
                onChange={handleZipCodeChange}
            />
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </Stack>
    );
  };

  //TODO: Debug or adjust values for each field as needed
  // Create email template and sending functionality
  // Fix formatting of form
  // Add type validation to each field?
  // Add error handling for each field?
  
  
  export default Contact;