import React from 'react'
interface Props{
    postsPerPage: number;
    totalPosts: number;
    paginate :  (number:number) => void ;
    currentPage: number;
}
const Pagination:React.FC<Props> = ({postsPerPage,totalPosts,paginate,currentPage}) => {
    const pageNumbers = [];

    for(let i = 1;i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <div>
        <ul className="pagination">
            {pageNumbers.map((number)=>{
                return <li key={number} className="page-item">
                    <a href="#!" onClick={()=>{paginate(number)}} className={number === currentPage? 'active':''}>
                        {number}
                    </a>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Pagination