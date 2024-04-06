
'use client'

import{ useState, type FC, useEffect } from 'react'
import { CategoryService } from '@/services/category.service';
import { useQuery } from 'react-query'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { Spinner } from 'react-bootstrap';
import HoverImg from './HoverImg';
import HoverText from './HoverText';

import st from "./Category.module.scss"
import Heading from '../heading/Heading';

const Category:FC = () => {
  const[activeIndex, setActiveIndex] = useState<number>(-1)
  const {data, isLoading} = useQuery({
    queryKey: ['get categories'],
    queryFn: ()  => CategoryService.getAll(),
    select: ({data}) => data
  });

  useEffect(() => {
    if(data && data.length > 0) {
        const firstElement = data[0].id; 
        setActiveIndex(firstElement); 
    }
}, [data]);

  const pathname = usePathname()
 
  return (
    <>
    {
      data && (
        <section >
        <Heading>Категории</Heading>
        <div className={st.category}>
          <div className={st.left}>
            <div className={st.block}>
              {
                data?.map((item)=>{
                  const isActive  = item.id === activeIndex;
                  return ( 
                    <HoverText key={item.id} 
                    text={item.name} 
                    active={isActive}/>)
                })
              }
            </div>
            {
              data?.map((item)=>{
                const isActive  = item.id === activeIndex;
                return ( 
                  <HoverImg key={item.id} 
                  url={item.images} 
                  active={isActive}/>)
              })
            }
          </div>
          <div className={st.wrapper}>
            {isLoading ?
              (<Spinner/>) : data ? (<>
                  {
                    data.map((category)=>(
                      <Link key={category.id}  
                      onMouseEnter={()=>setActiveIndex(category.id)}
                      onMouseLeave={()=> setActiveIndex(data[0]?.id)}
                      style={{color: pathname === `/category/${category.slug}` ? "red" : "black"}} href={`/category/${category.slug}`}>
                        <div className={st.content}>
                          { 
                            category.images && (
                            <img src={category.images} alt="Картинка в категории"/>)
                          }
                          <h3>{category.name}</h3>
                        </div>
                      
                      </Link>
                    ))
                  }
              </>) 
              : 
            (<div> Категорий нет</div>)
            }
          </div>
        </div>
      </section>
      )
    }
    </>
  )
}

export default Category
