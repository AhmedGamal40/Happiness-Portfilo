import React from "react";
import { useParams } from "react-router-dom";
import { Carousel, Container } from "react-bootstrap";
import Articles from '../../Data/Articles'; // Import your Articles data

function ArticlesDetails() {
    const params = useParams();
    const articleId = parseInt(params.id, 10); // Ensure the ID is an integer
    const article = Articles.find(item => item.id === articleId); // Find the article by ID

    if (!article) {
        return <div>Article not found</div>; // Handle article not found
    }

    return (
        <Container >
           
             <div className="card m-3" style={{textAlign:'center'}}>
  <h3 className="card-header mb-3">{article.title}</h3>
  <Carousel>
    {article.images.map((src, index) => (
        <Carousel.Item key={index}>
            <img 
                src={src} 
                className="d-block w-100" 
                alt={`Slide ${index}`} 
                style={{ height: '100%' }} // Set the height
            />
        </Carousel.Item>
    ))}
</Carousel>
  <div className="card-body">
    <p className="card-text">{article.desc}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
        </Container>
    );
}

export default ArticlesDetails;
