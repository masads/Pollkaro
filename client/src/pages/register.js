import * as React from 'react'
import {Box} from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/lab';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import axios from "axios";
import API_URL from "../components/API_URL";
const steps = ['Personal Information', 'Credential', 'CNIC or Passport Picture'];
const client = axios.create({
    baseURL: API_URL,
  });
function Register() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [fName,setfName]=React.useState('');
    const [lName,setlName]=React.useState('');
    const [bDate,setbDate]=React.useState(new Date());
    const [Email,setEmail]=React.useState('');
    const [Password,setPassword]=React.useState('');
    const [cnic,setcnic]=React.useState('');
    const [profileImage,setprofileImage]=React.useState('https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png');
    const [frontImage,setfrontImage]=React.useState('');
    const [backImage,setbackImage]=React.useState('');
    // const [updateImage, setUpdateImage] = React.useState(false);
    const [Alert, setAlert] = React.useState(null);
    const [count,setCount]=React.useState(0)

    const [profileImageData,setprofileImageData]=React.useState('');
    const [frontImageData,setfrontImageData]=React.useState('');
    const [backImageData,setbackImageData]=React.useState('');
    
    const onChangePicture = (e,id) => {
        setCount(count+1)
        if (e.target.files[0]) {
          // console.log("picture: ", e.target.files);
        //   setPicture(e.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            if(id==1){setprofileImage(reader.result);setprofileImageData(e.target.files[0]["name"]);}
            else if(id==2){setfrontImage(reader.result);setfrontImageData(e.target.files[0]["name"]);}
            else {setbackImage(reader.result);setbackImageData(e.target.files[0]["name"]);}
            // console.log(reader.result)
          });
          reader.readAsDataURL(e.target.files[0]);
        }
      };
      async function RegisterUser() {

          console.log(count)
          //image issue
          // if(count==3 && fName.length!=0 && lName.length!=0 && bDate.length!=0 && Email.length!=0 && Password.length!=0 && cnic.length!=0 )
          if(count==3){
              let pimageName = `${Date.now()}_${profileImageData}}`;
              let fimageName = `${Date.now()}_${frontImageData}}`;
              let bimageName = `${Date.now()}_${backImageData}`;
              const iData = new FormData();
              console.log(profileImage)
              iData.append("images", {
                name: pimageName,
                type: "image/jpeg",
                uri: JSON.stringify(profileImage),
              });
              iData.append("images", {
                name: fimageName,
                type: "image/jpeg",
                uri: frontImage,
              });
              iData.append("images", {
                name: bimageName,
                type: "image/jpeg",
                uri: backImage,
              });
              console.log(iData)
              client
              .post("/images", iData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .then(
                (response) => {
                  console.log("image add sucessfully");
                  console.log(response);
                },
                (response) => {
                  console.log("image add not sucessfully");
                  console.log(response);
                }
              );
              let data={
                fname:fName,
                lname:lName,
                birdthDate:bDate,
                email:Email,
                password:Password,
                CNIC:cnic
              }
              client
              .post("/signup", data, )
              .then(
                (response) => {
                  console.log("image add sucessfully");
                  console.log(response["request"]["_response"]);
                },
                (response) => {
                  console.log("image add not sucessfully");
                  console.log(response["request"]["_response"]);
                }
              );
              setActiveStep(activeStep+1)
          }else
          {
             setAlert(<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
             <strong className="font-bold">Please fill required field</strong>

             <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
               
             </span>
           </div>)
           setTimeout(()=>{
             setAlert('')
           },5000)
          }
      }

  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
        console.log("s")
      }
      
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
      // const isStepOptional = (step) => {
    //   return step === 1;
    // };
    // const handleSkip = () => {
    //   if (isStepOptional(activeStep)) {
    //     // You probably want to guard against something like this,
    //     // it should never occur unless someone's actively trying to break something.
    //     throw new Error("You can't skip a step that isn't optional.");
    //   }
  
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //   setSkipped((prevSkipped) => {
    //     const newSkipped = new Set(prevSkipped.values());
    //     newSkipped.add(activeStep);
    //     return newSkipped;
    //   });
    // };
  
    // const handleReset = () => {
    //   setActiveStep(0);
    // };
  
    return (

        
     <div  className="mt-[2rem] min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create New account</h2>
            {Alert}
          </div>
        <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button >Please Click here to Continur</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <div>
      
            {(() => {
            if(activeStep==0)
            {
                return <Box component="div" sx={{ display: 'flex', flexDirection: 'column',gap:'20%' }} >
                             <div className="grid justify-items-center py-3">
                               <img
                                className=" h-20 w-20 rounded-full  "
                                src={profileImage}

                                alt=""
                                />
                                {(profileImage!='https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png')?(<button onClick={()=>setprofileImage('https://www.freeiconspng.com/uploads/account-profile-user-icon--icon-search-engine-10.png')}>Remove</button>):(<label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e)=>{onChangePicture(e,1)}}/>
                                </label>)}
                                
                            </div>
                            <TextField sx={{paddingBottom:'1rem'}} id="demo-helper-text-misaligned-no-helper" label="First Name" defaultValue={fName} value={fName} onChange={(text)=>{setfName(text.target.value)}} />
                            <TextField sx={{paddingBottom:'1rem'}} id="demo-helper-text-misaligned-no-helper" label="Last Name" defaultValue={lName} value={lName} onChange={(text)=>{setlName(text.target.value)}}/>
                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                
                                <MobileDatePicker
                                label="Date of Birdth"
                                inputFormat="MM/dd/yyyy"
                                value={bDate}
                                onChange={(text)=>{setbDate(text)}}
                                renderInput={(params) => <TextField {...params} />}
                                />
                         
                            </LocalizationProvider>
                            
                            {/* <div className="mt-3">
                                <textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    placeholder="Description"
                                    defaultValue={''}
                                />
                                </div> */}
                    </Box>
                        
                ;
            }else if(activeStep==1)
            {
                return <Box component="div" sx={{ display: 'flex', flexDirection: 'column',gap:'20%'}}>
                <TextField type="email" sx={{paddingBottom:'1rem'}} id="demo-helper-text-misaligned-no-helper" label="Email" defaultValue={Email} value={Email} onChange={(text)=>{setEmail(text.target.value)}}/>
                <TextField type="password" sx={{paddingBottom:'1rem'}} id="demo-helper-text-misaligned-no-helper" label="Password" defaultValue={Password} value={Password} onChange={(text)=>{setPassword(text.target.value)}}/>
                <TextField type="number" id="demo-helper-text-misaligned-no-helper" label="CNIC" defaultValue={cnic} value={cnic} onChange={(text)=>{setcnic(text.target.value)}}/>
                </Box>
            }else
            {
                return <div>
                <label className="block text-sm font-medium text-gray-700">Front photo</label>
                {(frontImage!='')?(
                 <><div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md" ><img  src={frontImage}alt=""/></div><button className="text-red-600" onClick={()=>setfrontImage('')}>Remove</button></>):(<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e)=>{onChangePicture(e,2)}}/>
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>)}
                <label className="block text-sm font-medium text-gray-700">Back photo</label>
                {(backImage!='')?(
                 <><div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md" ><img  src={backImage}alt=""/></div><button className="text-red-600" onClick={()=>setbackImage('')}>Remove</button></>):(<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={(e)=>{onChangePicture(e,3)}}/>
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>)}
                </div>
                
                ;
            }
        })()}
        </div>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            

            <Button onClick={()=>{if(activeStep != steps.length - 1){handleNext()}else {RegisterUser()}}}>
              {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </div>
    </div>

    );
  }

export default Register