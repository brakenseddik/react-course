import {useState,useEffect} from 'react'
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, seterror] = useState(null)
     
     useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        console.log(res);
        if (!res.ok) {
          throw Error('could not fetch the data')
          
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setisLoading(false);
        seterror(null)
      })
      .catch(err=>{
        setisLoading(false);
        seterror(err.message);

      })
    }, 1000); 
  }, []);

    return ( 
      <div className="home">
        {error && <div>{error}</div> }
        {isLoading && <div>Loading data ...</div> }
        { blogs &&  <BlogList blogs={blogs} title="All Blogs" />}    
   {/* <button onClick={()=>{setname("seddik")}}> change name</button> */}
      </div>
     );
}
 
export default Home;