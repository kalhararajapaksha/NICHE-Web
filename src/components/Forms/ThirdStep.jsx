import React,{useContext} from 'react';
import { Button,TextField,Checkbox} from '@material-ui/core';
import {multiStepContext} from '../../StepContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Container, Row, Col } from 'react-bootstrap';

export default function ThirdStep() {
    const {userData,setUserData,submitData}=useContext(multiStepContext);
    const [value, setValue] = React.useState('yes');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <section>
            <Container>
                <Row>
                <h6>Are Products Designed/Made In Sri Lanka?</h6>
                <div>
                <RadioGroup aria-label="Made in Sri Lanka" name="MadeinSriLanka" value={userData['MadeinSriLanka']} onChange={(e)=>setUserData({...userData,"MadeinSriLanka":e.target.value})} >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />      
                </RadioGroup>
                 </div>
                </Row>
                <Row>
                <h6>Are Products Designed/Made In Sri Lanka?</h6>
                <Col>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Kids"  labelPlacement="end"  checked={userData['checkedA']} onChange={(e)=>setUserData({...userData,"checkedA":e.target.checked})} value={userData['checkedA']} name="Kids" margin="normal" variant="outlined" />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />}  label="Mens"  checked={userData['checkedB']} onChange={(e)=>setUserData({...userData,"checkedB":e.target.checked})} value={userData['checkedB']} name="Mens" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} ox label="Women"  checked={userData['checkedC']} onChange={(e)=>setUserData({...userData,"checkedC":e.target.checked})} value={userData['checkedC']} name="Women" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} ox label="Bridal"  checked={userData['checkedD']} onChange={(e)=>setUserData({...userData,"checkedD":e.target.checked})} value={userData['checkedD']} name="Bridal" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} ox label="Swimwear"  checked={userData['checkedE']} onChange={(e)=>setUserData({...userData,"checkedE":e.target.checked})} value={userData['checkedE']} name="Swimwear" margin="normal" variant="outlined" />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} ox label="Modest Wear"  checked={userData['checkedF']} onChange={(e)=>setUserData({...userData,"checkedF":e.target.checked})} value={userData['checkedF']} name="ModestWear" margin="normal" variant="outlined"  />
                    </div>
                </Col>
                <Col>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} box label="Accessories"  checked={userData['checkedG']} onChange={(e)=>setUserData({...userData,"checkedG":e.target.checked})} name="Accessories" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />}  label="Make-Up"  checked={userData['checkedH']} onChange={(e)=>setUserData({...userData,"checkedH":e.target.checked})} name="Make-Up" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />}  label="Footwear"  checked={userData['checkedI']} onChange={(e)=>setUserData({...userData,"checkedI":e.target.checked})} name="Footwear" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />}  label="Gifts"  checked={userData['checkedJ']} onChange={(e)=>setUserData({...userData,"checkedJ":e.target.checked})} name="Gifts" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />}  label="Other"  checked={userData['checkedK']} onChange={(e)=>setUserData({...userData,"checkedK":e.target.checked})} name="Other" margin="normal" variant="outlined"  />
                    </div>  
                </Col>
                </Row>           
            </Container>
        </section>
    )
}
