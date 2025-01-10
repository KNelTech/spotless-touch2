import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const AccordionUsage = () => {
return (
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
                Ideal for regular upkeep and a quick refresh <br />
                Basic cleaning essentials (dusting, vacuuming, sweeping, and mopping) <br />
                Kitchen counter cleaning <br />
                Bathroom sanitization (toilet, sink, tub/shower) <br />
                Pricing (Starting at): <br />
                Small home (1–2 bedrooms): $125 <br />
                Medium home (3–4 bedrooms): $150 <br />
                Large home (5+ bedrooms): $200 <br />
                Prices may vary for extra rooms or heavy clutter <br />
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
                Go beyond the basics with detailed surface care <br />
                Everything in Fresh Start, plus: <br />
                Inside window cleaning (within safe reach) <br />
                Baseboards and door-frame dusting <br />
                Exterior appliance cleaning <br />
                Garbage removal <br />
                Pricing (Starting at): <br />
                Small home (1–2 bedrooms): $150 <br />
                Medium home (3–4 bedrooms): $225 <br />
                Large home (5+ bedrooms): $300 <br />
                Prices may vary for extra rooms or heavy clutter <br />
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
                Comprehensive deep clean and organization for a spotless home <br />
                Everything in Radiant Refresh, plus: <br />
                Deep cleaning/organizing of kitchen and bathrooms <br />
                Oven and refrigerator interior cleaning <br />
                Closet organization <br />
                Carpet deep cleaning <br />
                Under-furniture cleaning <br />
                Pricing (Starting at): <br />
                Small home (1–2 bedrooms): $250 <br />
                Medium home (3–4 bedrooms): $375 <br />
                Large home (5+ bedrooms): $500 <br />
                Prices may vary for extra rooms or heavy clutter <br />
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
                (Optional, can be added to any package) <br />
                Inside cabinet cleaning <br />
                Carpet steam cleaning or upholstery cleaning <br />
                Carpet deodorizing <br />
                Additional tasks upon request <br />
            </AccordionDetails>
        </Accordion>
    </div>
);
};

export default AccordionUsage;