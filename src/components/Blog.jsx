import React from 'react'
import BlogCard from './BlogCard.jsx'

const Blog = () => {
    const blogs = [
        {
            title: "Four ways to cheer yourself up on a blue monday",
            pic: "./img/blog1.jpg",
            date: "20 August 2022",
            time: "1 min read",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste molestias vitae nostrum assumenda neque distinctio....",
            more: "read more"
        },
        {
            title: "How to oorganize your budget for maximum productivity",
            pic: "./img/blog2.jpg",
            date: "20 August 2022",
            time: "1 min read",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste molestias vitae nostrum assumenda neque distinctio....",
            more: "read more"            
        },
         {
            title: "SHould small business be entitled to system",
            pic: "./img/blog3.jpg",
            date: "20 August 2022",
            time: "1 min read",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste molestias vitae nostrum assumenda neque distinctio....",
            more: "read more"            
        }       
    ];

  return (
    <section>
        <div className="container py-20 text-white">
            <div className="text-center m-auto mb-20 md:w-1/2">
                <h4 className="text-color-secondary">Innovation and Quality Improvement</h4>
                <h1 className="title">Latest update solution and company News</h1>
            </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    
            {/* Blog Card */}
            {blogs.map((blog, index)=>(
                <BlogCard
                key={index}
                pic={blog.pic} 
                date={blog.date}
                time={blog.time}
                content={blog.content}
                title={blog.title}
                more={blog.more}
                />                
            ))}
        </div>


        </div>
    </section>
)
}

export default Blog
