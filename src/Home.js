import { useState } from "react";

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        {
          title: 'My new website',
          body: 'I am excited to launch my new website and showcase my work to the world.',
          author: 'mario',
          id: 1
        },
        {
          title: 'Welcome party!',
          body: 'Join us for a warm welcome party to celebrate the launch of our community.',
          author: 'yoshi',
          id: 2
        },
        {
          title: 'Web dev top tips',
          body: 'Learn some of the best tips and tricks for becoming a successful web developer.',
          author: 'mario',
          id: 3
        },
        {
          title: 'React Hooks Tutorial',
          body: 'Explore the power of React Hooks and how they can simplify your component logic.',
          author: 'luigi',
          id: 4
        },
        {
          title: 'JavaScript Basics',
          body: 'Master the fundamentals of JavaScript programming and build interactive web applications.',
          author: 'peach',
          id: 5
        },
        {
          title: 'CSS Styling Tricks',
          body: 'Discover creative CSS styling techniques to make your websites visually appealing.',
          author: 'bowser',
          id: 6
        },
        {
          title: 'Node.js Fundamentals',
          body: 'Dive into Node.js and learn how to build server-side applications with JavaScript.',
          author: 'toad',
          id: 7
        },
        {
          title: 'HTML5 Features',
          body: 'Explore the latest features of HTML5 and how they enhance web development.',
          author: 'luigi',
          id: 8
        },
        {
          title: 'Python Programming',
          body: 'Embark on a journey to learn Python programming and its applications.',
          author: 'yoshi',
          id: 9
        },
        {
          title: 'Database Design',
          body: 'Get insights into database design principles for building efficient and scalable systems.',
          author: 'mario',
          id: 10
        }
      ]);

    return ( 
        <div className="Home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;