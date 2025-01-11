import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './accordian.css';

const AccordionUsage = () => {
return (
    <div className="accordion-container">
        <div>
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
                        <li>Pricing (Starting at):</li>
                        <li>Small home (1–2 bedrooms): $125</li>
                        <li>Medium home (3–4 bedrooms): $150</li>
                        <li>Large home (5+ bedrooms): $200</li>
                        <li>Prices may vary for extra rooms or heavy clutter</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Radiant Refresh</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="accordianUL">
                        <li>Go beyond the basics with detailed surface care</li>
                        <li>Everything in Fresh Start, plus:</li>
                        <li>Inside window cleaning (within safe reach)</li>
                        <li>Baseboards and door-frame dusting</li>
                        <li>Exterior appliance cleaning</li>
                        <li>Garbage removal</li>
                        <li>Pricing (Starting at):</li>
                        <li>Small home (1–2 bedrooms): $150</li>
                        <li>Medium home (3–4 bedrooms): $225</li>
                        <li>Large home (5+ bedrooms): $300</li>
                        <li>Prices may vary for extra rooms or heavy clutter</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
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
                        <li>Everything in Radiant Refresh, plus:</li>
                        <li>Deep cleaning/organizing of kitchen and bathrooms</li>
                        <li>Oven and refrigerator interior cleaning</li>
                        <li>Closet organization</li>
                        <li>Carpet deep cleaning</li>
                        <li>Under-furniture cleaning</li>
                        <li>Pricing (Starting at):</li>
                        <li>Small home (1–2 bedrooms): $250</li>
                        <li>Medium home (3–4 bedrooms): $375</li>
                        <li>Large home (5+ bedrooms): $500</li>
                        <li>Prices may vary for extra rooms or heavy clutter</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    <Typography component="span">Add-On Services</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul className="accordianUL">
                        <li>(Optional, can be added to any package)</li>
                        <li>Inside cabinet cleaning</li>
                        <li>Carpet steam cleaning or upholstery cleaning</li>
                        <li>Carpet deodorizing</li>
                        <li>Additional tasks upon request</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    </div>
);
};

export default AccordionUsage;