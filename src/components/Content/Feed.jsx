import NewsFeedContainer from './NewsFeed/NewsFeedContainer'
import TrendsContainer from './Trends/TrendsContainer';

const Feed = (props) => {
    return (
        <div className="content">
            <NewsFeedContainer />
            <TrendsContainer/>
        </div>
    );
}

export default Feed;
