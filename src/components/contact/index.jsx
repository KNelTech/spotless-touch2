import { useState } from 'react';
// import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import emailjs from '@emailjs/browser';
import isEmpty from 'lodash/isEmpty';
import { Alert, FormControl, InputLabel, Stack, TextField, Select, MenuItem, Button } from '@mui/material';
import './contact.css';

const EMAIL_JS_SERVICE_ID = "service_k2ops6p";
const EMAIL_JS_TEMPLATE_ID = "template_jhzz6uj";
const EMAILE_JS_PUBLIC_KEY = "XbDVmB7EjVQT46WfP";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [numBedrooms, setNumBedrooms] = useState(0);
    const [numBathrooms, setNumBathrooms] = useState(0);
    const [numOtherRooms, setNumOtherRooms] = useState(0);
    const [cleaningType, setCleaningType] = useState('');

    // const [_, setRecaptchaToken] = useState('');

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [zipCodeError, setZipCodeError] = useState(false);
    const [numTotalRoomsError, setNumTotalRoomsError] = useState(false);
    const [cleaningTypeError, setCleaningTypeError] = useState(false);


    const handleNameChange = (event) => {
        const name = event.target.value;
        if (isNaN(name) || name === "") {
            setNameError(false);
            setName(name);
        }
    };
    const handleEmailChange = (event) => {
        setEmailError(false);
        setEmail(event.target.value);
    };
    const handlePhoneChange = (event) => {
        const phone = event.target.value;
        if (!isNaN(phone)) {
            setPhoneError(false);
            setPhone(phone);
        }
    };
    const handleNumBedroomsChange = (event) => {
        setNumTotalRoomsError(false);
        setNumBedrooms(event.target.value);
    };
    const handleNumBathroomsChange = (event) => {
        setNumTotalRoomsError(false);
        setNumBathrooms(event.target.value);
    };
    const handleNumOtherRoomsChange = (event) => {
        setNumTotalRoomsError(false);
        setNumOtherRooms(event.target.value);
    };
    const handleCleaningTypeChange = (event) => {
        setCleaningType(event.target.value);
        setCleaningTypeError(false);
    };
    const handleZipCodeChange = (event) => {
        const zipCode = event.target.value;
        if (!isNaN(zipCode)) {
            setZipCodeError(false);
            setZipCode(zipCode);
        }
    };
    // const handleRecaptchaVerify = (token) => {
    //     setRecaptchaToken(token);
    // };
    const verifyForm = () => {
        const nameInvalid = isEmpty(name);
        const emailInvalid = isEmpty(email);
        const phoneInvalid = isEmpty(phone);
        const zipCodeInvalid = isEmpty(zipCode);
        const numTotalRoomsInvalid = Math.max(numBedrooms, numBathrooms, numOtherRooms) === 0;
        const cleaningTypeInvalid = isEmpty(cleaningType);

        if (nameInvalid || emailInvalid || phoneInvalid || zipCodeInvalid || numTotalRoomsInvalid || cleaningTypeInvalid) {
            setNameError(nameInvalid);
            setEmailError(emailInvalid);
            setPhoneError(phoneInvalid);
            setZipCodeError(zipCodeInvalid);
            setNumTotalRoomsError(numTotalRoomsInvalid);
            setCleaningTypeError(cleaningTypeInvalid);
            
            setAlertSeverity('error');
            setAlertMessage('Please fill out all required fields and enter at least one room.');
            setIsAlertOpen(true);
            return false;
        }
        return true;
    };
    const handleSubmit = () => {
        if (!verifyForm()) {
            return;
        }

        const message = 
            `Email: ${email}\n
            Phone: ${phone}\n
            Zip Code: ${zipCode}\n
            Bedrooms: ${numBedrooms}\n
            Bathrooms: ${numBathrooms}\n
            Other Rooms: ${numOtherRooms}\n
            Cleaning Type: ${cleaningType}`;

        emailjs.send(
            EMAIL_JS_SERVICE_ID,
            EMAIL_JS_TEMPLATE_ID,
            {
                from_name: name,
                reply_to: email,
                message: message
            },
            EMAILE_JS_PUBLIC_KEY
        ).then((_) => {
            setAlertSeverity('success');
            setAlertMessage('Submitted successfully! We will get back to you soon.');

            setIsAlertOpen(true);
            
            setName('');
            setEmail('');
            setPhone('');
            setZipCode('');
            setNumBedrooms(0);
            setNumBathrooms(0);
            setNumOtherRooms(0);
            setCleaningType('');
        }, (error) => {
            console.error("Failed to send email:", error);
            setAlertSeverity('error');
            setAlertMessage('Failed to submit. Please try again later.');

            setIsAlertOpen(true);
        });
    }

    return (
        <div className="contactContainer">
            <Stack spacing={2}>
                <h1 className="contact-title">Contact Us</h1>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    required
                    error={nameError}
                    value={name}
                    onChange={handleNameChange}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    required
                    error={emailError}
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    id="outlined-basic"
                    label="Phone"
                    required
                    error={phoneError}
                    variant="outlined"
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <FormControl error={numTotalRoomsError}>
                    <InputLabel id="demo-multiple-name-label">How Many Bedrooms?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={numBedrooms}
                        label="Bedrooms"
                        onChange={handleNumBedroomsChange}
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5+</MenuItem>
                    </Select>
                </FormControl>
                <FormControl error={numTotalRoomsError}>
                    <InputLabel id="demo-multiple-name-label">How Many Bathrooms?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={numBathrooms}
                        label="How Many Bathrooms?"
                        onChange={handleNumBathroomsChange}
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5+</MenuItem>
                    </Select>
                </FormControl>
                <FormControl error={numTotalRoomsError}>
                    <InputLabel id="demo-multiple-name-label">How Many Other Rooms?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={numOtherRooms}
                        label="Other Rooms?"
                        onChange={handleNumOtherRoomsChange}
                    >
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5+</MenuItem>
                    </Select>
                </FormControl>
                <FormControl required error={cleaningTypeError}>
                    <InputLabel id="demo-multiple-name-label">Cleaning Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cleaningType}
                        label="Cleaning Type"
                        onChange={handleCleaningTypeChange}
                    >
                        <MenuItem value={"fresh-start"}>Fresh Start</MenuItem>
                        <MenuItem value={"ultimate-sparkle"}>Ultimate Sparkle</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="outlined-basic"
                    label="Zip Code"
                    variant="outlined"
                    required
                    error={zipCodeError}
                    value={zipCode}
                    onChange={handleZipCodeChange}
                />
                {/* <GoogleReCaptcha onVerify={handleRecaptchaVerify} /> */}
                <Button id="contactSubmit" variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                {isAlertOpen &&  (
                    <Alert severity={alertSeverity}>
                        {alertMessage}
                    </Alert>
                )}    
            </Stack>
        </div>
    );
  };
  
  export default Contact;