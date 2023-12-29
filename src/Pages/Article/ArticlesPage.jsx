import React from "react";
import data from '../../Data/Articles'
import { Link } from "react-router-dom";

function ArticlesPage() {
  return <div>
     {/* <!-- Start Articles --> */}
    <div className="articles" id="articles">
        <h2 className="main-title">Articles</h2>
        <div className="container">
            {
                data.length > 0 ? (
                    data.map((item,index) => {
                        return (
                            <div key={index} className="box">
                                            <img src={item.image} alt=""/>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.shortDesc}</p>
                                </div>
                                <div className="info">
                                    <Link to={`/articles-detalis/${item.id}`}>
                                        More Detalis
                                    </Link>
                                    <i class="fas fa-long-arrow-alt-right"></i>
                                </div>
                            </div>
                        )
                    })
                ) : null
            }
        </div>
    </div>
<div className="spikes"></div>
    {/* <!-- End Articles --> */}
  </div>;
}

export default ArticlesPage;
