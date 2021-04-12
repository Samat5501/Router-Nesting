import {useParams,} from "react-router-dom";

function Topic() {

    
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId} 1234</h3>
    </div>
  );
}
export {Topic}