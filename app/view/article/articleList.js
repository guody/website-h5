import React from "react";
import {Link} from 'react-router-dom';
const ArticleList = () => (
  <div>
    <ul>
        { 
            [{"arcid":"1","name":"66666666"}].map(p => (
            <li key={p.arcid}>
                <Link to={`/acticle/${p.arcid}`}>{p.name}</Link>
            </li>
            ))
        }
    </ul>
  </div>
)

export default ArticleList;