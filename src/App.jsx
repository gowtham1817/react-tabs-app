import { useEffect, useState } from 'react'
import './App.css'
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [isLoading,setIsLoading] = useState(true)
  const [jobs,setJobs] = useState([])
  const [currentItem,setCurrentItem] = useState(0)

  const fetchJobs = async() =>{
      // setIsLoading(true);
      try{
         const response = await fetch(url);
         const newJobs = await response.json();
         setJobs(newJobs)
         setIsLoading(false)
      }
      catch(error){
        console.log(error)
      }
  }




  useEffect(()=>{
       fetchJobs();
  },[])


  if(isLoading){
    return(
      <section className='jobs-center'>
          <div className='loading'>

          </div>
      </section>
    );
  } 

  return (
    <section className='jobs-center'>
         <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
         <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  )
}

export default App
