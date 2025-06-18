import PropTypes from "prop-types";


function Articles(props){
    
   return(
   <div className="articles">
    <p>Headline:{props.headline}</p>
    <p>Content:{props.content}</p>
    <p>Date:{props.date}</p>
    <p>Author:{props.author}</p>
   </div>
   );
}
Articles.propTypes = {
headline: PropTypes.string,
Content: PropTypes.string,
Date: PropTypes.number,
Author: PropTypes.author
}
export default Articles