import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        
    },[])
    return (
        <div>
            <Header></Header>
            
            <div className='container mx-auto py-5 w-75'>
                <h2 className='blog-title text-center py-5'>Our <span>Critical Eye Care Hospital</span> Latest Blog</h2>
                {/* singleblog page\ */}
                <div className='row g-4'>
                    {
                        blogs.map(blog => <SingleBlog
                        key={blog.id}
                        blog={blog}
                        ></SingleBlog>)
                    }
                </div>
            </div>
          <Footer></Footer>
        </div>
    );
};

export default Blog;