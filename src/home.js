import {useState,useEffect} from 'react'
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setisLoading] = useState(true);
     
     useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setisLoading(false)
      })
    }, 1000); 
  }, []);

    return ( 
      <div className="home">
        {isLoading && <div>Loading data ...</div> }
   { blogs &&  <BlogList blogs={blogs} title="All Blogs" />}    
   {/* <button onClick={()=>{setname("seddik")}}> change name</button> */}
      </div>
     );
}
 
export default Home;