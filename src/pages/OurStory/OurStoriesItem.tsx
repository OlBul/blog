import { OurStoryProps } from './ourStoryArray'
import '../../components/ArticalesSection/ArticalesList.scss'
import './OurStories.scss'
import { useAppSelector } from 'redux/hooks'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Link } from 'react-router-dom'

const OurStoriesItem = ({ id, title, photo1, paragraph }: OurStoryProps) => {
    const isLikes = useAppSelector((state) => state.likeState[id])
    return (
        <>
            <div className="story__column">
                <div className="story__item_img">
                    <img src={photo1} alt="woman" />
                </div>
                <div className="story__item_content">
                    <div className="story__articale">
                        <h5 className="story__item_title">{title}</h5>
                        <p className="story__item_text">{paragraph}</p>
                    </div>
                </div>
            </div>
            <div className="story__buttons">
                <button className="likes__count">
                    {isLikes ? (
                        <FavoriteIcon fontSize="large" color="warning" />
                    ) : (
                        <FavoriteBorderIcon fontSize="large" color="warning" />
                    )}
                </button>
                <Link to={`/ourStories/${id}`} className="story__btn">
                    Show more &rsaquo;&rsaquo;&rsaquo;
                </Link>
            </div>
        </>
    )
}

export default OurStoriesItem
