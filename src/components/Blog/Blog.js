import React from 'react';
import './Blog.scss'

function Blog() {
  return (
    <div className='section-blog'>
        <div className='section-blog__blog'>
          <h2>Blog</h2>
          <ul className='blog-list'>
            <li className='blog-list-item'></li>
            <li className='blog-list-item'></li>
            <li className='blog-list-item'></li>
            <li className='blog-list-item'></li>
          </ul>
        </div>
        <div className='section-blog__aside'>
          <h2>News</h2>
          <ul className='aside-list'>
            <li className='aside-list-item'></li>
            <li className='aside-list-item'></li>
            <li className='aside-list-item'></li>
          </ul>
        </div>
    </div>
  );
}

export default Blog;