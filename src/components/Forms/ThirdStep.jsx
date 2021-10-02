import React,{useContext} from 'react';
import { Button,TextField,Checkbox} from '@material-ui/core';
import {multiStepContext} from '../../StepContext';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

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
                <h6>Catogories</h6>
                <Col>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Wear"  labelPlacement="end"  checked={userData['checkedA']} onChange={(e)=>setUserData({...userData,"checkedA":e.target.checked})} value={userData['checkedA']} name="Wear" margin="normal" variant="outlined" />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Bags"  labelPlacement="end"  checked={userData['checkedB']} onChange={(e)=>setUserData({...userData,"checkedB":e.target.checked})} value={userData['checkedB']} name="Bags" margin="normal" variant="outlined" />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} label="Kids"  labelPlacement="end"  checked={userData['checkedC']} onChange={(e)=>setUserData({...userData,"checkedC":e.target.checked})} value={userData['checkedC']} name="Kids" margin="normal" variant="outlined" />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />}  label="Mens"  checked={userData['checkedD']} onChange={(e)=>setUserData({...userData,"checkedD":e.target.checked})} value={userData['checkedD']} name="Mens" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} ox label="Women"  checked={userData['checkedE']} onChange={(e)=>setUserData({...userData,"checkedE":e.target.checked})} value={userData['checkedE']} name="Women" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} ox label="Health And Beauty "  checked={userData['checkedF']} onChange={(e)=>setUserData({...userData,"checkedF":e.target.checked})} value={userData['checkedF']} name="Health And Beauty" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} ox label="Lounge Wear"  checked={userData['checkedG']} onChange={(e)=>setUserData({...userData,"checkedG":e.target.checked})} value={userData['checkedG']} name="Lounge Wear" margin="normal" variant="outlined"  />
                    </div>


                </Col>
                <Col>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} box label="Accessories"  checked={userData['checkedH']} onChange={(e)=>setUserData({...userData,"checkedH":e.target.checked})} value={userData['checkedH']} name="Accessories" margin="normal" variant="outlined"  />
                    </div>

                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />}  label="Footwear"  checked={userData['checkedI']} onChange={(e)=>setUserData({...userData,"checkedI":e.target.checked})} value={userData['checkedI']} name="Footwear" margin="normal" variant="outlined"  />
                    </div>


                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} ox label="Bridal"  checked={userData['checkedJ']} onChange={(e)=>setUserData({...userData,"checkedJ":e.target.checked})} value={userData['checkedJ']} name="Bridal" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} ox label="Party"  checked={userData['checkedK']} onChange={(e)=>setUserData({...userData,"checkedK":e.target.checked})} value={userData['checkedK']} name="Party" margin="normal" variant="outlined" />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} ox label="Sarongs"  checked={userData['checkedL']} onChange={(e)=>setUserData({...userData,"checkedL":e.target.checked})} value={userData['checkedL']} name="Sarongs" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />} ox label="Sarees"  checked={userData['checkedM']} onChange={(e)=>setUserData({...userData,"checkedM":e.target.checked})} value={userData['checkedM']} name="Sarees" margin="normal" variant="outlined"  />
                    </div>
                    <div>
                    <FormControlLabel  control={<Checkbox color="secondary" />}  label="Other"  checked={userData['checkedN']} onChange={(e)=>setUserData({...userData,"checkedN":e.target.checked})} value={userData['checkedN']} name="Other" margin="normal" variant="outlined"  />
                    </div>  
                </Col>

                </Row>   
                <Row>
                <Col>
                        <Form.Group className="mb-3" controlId="NewCategory">
                        <Form.Label>Or Add New Category</Form.Label>
                        <Form.Control type="text" placeholder="New Category" name="New Category" />
                        </Form.Group>
                </Col>
                </Row>        
            </Container>
        </section>
    )
}
