import OurStories, { OurStoryProps } from './ourStoryArray'
import './OurStories.scss'
import '../../components/ArticalesSection/ArticalesList.scss'
import OurStoriesItem from './OurStoriesItem'

const OurStoriesList = () => {
    return (
        <>
            <section className="story">
                <div className="container story__container">
                    <h1 className="story__title">Our Stories</h1>

                    <div className="story__list">
                        {OurStories.map(
                            ({
                                id,
                                title,
                                photo1,
                                paragraph,
                                category,
                            }: OurStoryProps) => (
                                <div className="story__item" key={id}>
                                    <OurStoriesItem
                                        id={id}
                                        title={title}
                                        photo1={photo1}
                                        paragraph={paragraph}
                                        category={category}
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurStoriesList
