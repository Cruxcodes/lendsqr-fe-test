import React,{useState,useEffect} from 'react'
import image from '../../assets/icons/filter-results-button.png'
import axios from 'axios'
import Pagination from './Pagination';
import UserItem from './UserItem';
import { User } from '../../shared/imageExports';
type User = {
    orgName:string;
    userName: string;
    email:string;
    createdAt:Date;
    phoneNumber: string;
    id:number;
};

const UserTable = () => {
  
    const [post,setPosts] = useState<User[]>([])
    const [loadnig,setLoading] = useState(false)
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(10)


    useEffect(()=>{
    const getUsers = async() =>{
        setLoading(true);
        const response = await axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        setPosts(response.data)
        setLoading(true)
    }


        getUsers()

    },[])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost -postsPerPage;
    const currentPost = post.slice(indexOfFirstPost,indexOfLastPost)

        // Change page
        const paginate = (pageNumber:number) => setCurrentPage(pageNumber)

  return (
    <div className='userTable'>

        
     <div className="headings">
            <div className="header">
                <p>Organization</p>
                <img src={image} alt="icon" />
            </div>
            <div className="header">
                <p>USERNAME</p>
                <img src={image} alt="icon" />
            </div>
            <div className="header">
                <p>email</p>
                <img src={image} alt="icon" />
            </div>
            <div className="header">
                <p>Phone number</p>
                <img src={image} alt="icon" />
            </div>
            <div className="header">
                <p>Date Joined</p>
                <img src={image} alt="icon" />
            </div>
            <div className="header">
                <p>status</p>
                <img src={image} alt="icon" />
            </div>
        </div>
        
        {currentPost.map((item,index)=>{
          return <UserItem {...item} key={index}/>
        })}

        <Pagination postsPerPage={postsPerPage} totalPosts={post.length} paginate={setCurrentPage} currentPage={currentPage}/>
    </div>
  )
}

export default UserTable