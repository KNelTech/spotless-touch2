import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import './accordian.css';

const AccordionUsage = () => {
return (
    <div className="accordion-container">
        <div>
        <h1 className='servicesTitle' id="services">Services</h1>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">Fresh Start</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="accordianUL">
                        <li>Ideal for regular upkeep and a quick refresh</li>
                        <li>Basic cleaning essentials (dusting, vacuuming, sweeping, and mopping)</li>
                        <li>Kitchen counter cleaning</li>
                        <li>Bathroom sanitization (toilet, sink, tub/shower)</li>
                        <li>Exterior appliance cleaning</li>
                        <li>Garbage removal</li>
                        <li>Pricing (Estimate):</li>
                        <li>Small home (1–2 bedrooms): $150</li>
                        <li>Medium home (3–4 bedrooms): $200</li>
                        <li>Large home (5+ bedrooms): $250+</li>
                        <li>*Basic estimates* pricing may be more or less depending on requirements</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <Typography component="span">Ultimate Sparkle</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="accordianUL">
                        <li>Comprehensive deep clean and organization for a spotless home</li>
                        <li>Everything in Fresh Start, plus:</li>
                        <li>Deep cleaning / organizing of kitchen and bathrooms</li>
                        <li>Refrigerator interior cleaning</li>
                        <li>Inside cabinet cleaning</li>
                        <li>Closet organization</li>
                        <li>Carpet deep cleaning</li>
                        <li>Under-furniture cleaning</li>
                        <li>Pricing (Estimate):</li>
                        <li>Small home (1–2 bedrooms): $225</li>
                        <li>Medium home (3–4 bedrooms): $300</li>
                        <li>Large home (5+ bedrooms): $400</li>
                        <li>*Basic estimates* pricing may be more or less depending on requirements</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    <Typography component="span">Add-On / Other Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="accordianUL">
                        <li>junk removal</li>
                        <li>Move out clean</li>
                        <li>Post construction clean</li>
                        <li>Inside / outside window cleaning (within safe reach)</li>
                        <li>Laundry</li>
                        <li>Wall washing</li>
                        <li>Oven interior</li>
                        <li>Room organization</li>
                        <li>Carpet steam cleaning or upholstery cleaning</li>
                        <li>Carpet deodorizing</li>
                        <li>Additional tasks upon request at time of quote</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
);
};

export default AccordionUsage;