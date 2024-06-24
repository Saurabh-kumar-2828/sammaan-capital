import {useState, useEffect} from "react";
import {Search} from "react-bootstrap-icons";
import useIsScreenSizeBelow from "~/hooks/useIsScreenSizeBelow";
import {ProjectCard} from "../componentLibrary/reusableCards/projectCard";
import type {ContentProvider, Projects} from "~/typeDefinitions";

export function ApprovedProjectsSection({className, projects, headingId, contentData}: {className?: string; headingId:string; projects: Projects;  contentData: ContentProvider}) {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProjects, setFilteredProjects] = useState([]);
    // const [isShowMore, setIsShowMore] = useState(false);
    useEffect(() => {
        const filteredItems = projects.filter(
            project =>
                project.location
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                project.projectName.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        setFilteredProjects(filteredItems);
    }, [searchQuery]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const isScreenSizeBelow = useIsScreenSizeBelow(1024);
    const [numberOfCards, setNumberOfCards] = useState(4);

    useEffect(() => {
        if (isScreenSizeBelow) {
            setNumberOfCards(2);
        } else {
            setNumberOfCards(4);
        }
    }, [isScreenSizeBelow]);

    return (
        <div className="sc-px-screen-edge tw-py-10 lg:tw-py-20">
            <div className="tw-max-w-7xl tw-mx-auto tw-grid tw-gap-6 lg:tw-gap-8">
                <div className="sc-text-headline tw-text-center">
                    {contentData.getContent(headingId)}
                </div>
                <div className="tw-relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={e => handleSearch(e.target.value)}
                        placeholder="Search a project by city or builder name"
                        className="sc-text-input tw-rounded-full sc-xxsmall-shadow"
                    />
                    <Search className="tw-absolute tw-right-6 tw-top-4" />
                </div>
                <div className="tw-grid lg:tw-grid-cols-4 tw-grid-cols-2 tw-gap-3 lg:tw-gap-8">
                    {filteredProjects
                        .slice(0, numberOfCards)
                        .map((item, itemIndex) => (
                            <ProjectCard
                                key={itemIndex}
                                location={item.location}
                                projectName={item.projectName}
                                text={item.address}
                            />
                        ))}
                </div>
                <button
                    className="sc-text-body tw-grid tw-justify-self-center tw-text-secondary-800 tw-underline"
                    onClick={() =>
                        setNumberOfCards(prev => {
                            if (numberOfCards < filteredProjects.length) {
                                return prev + 4;
                            } else return 4;
                        })
                    }>
                    {numberOfCards < filteredProjects.length
                        ? 'Show More Projects ->'
                        : 'Show Less Projects ->'}
                </button>
            </div>
        </div>
    );
}