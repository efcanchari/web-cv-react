import React from 'react';
import { Chrono } from 'react-chrono';
import styles from './ExperienceTimeline.css'; // Make sure the path to your CSS module is correct

import experience from './experience.json';

class ExperienceTimeline extends React.Component {
    render() {
        return (
            <div>
                <h4 className="text-uppercase text-center">Experience</h4>
                <Chrono
                    items={experience}
                    mode="VERTICAL_ALTERNATING"
                    hideControls
                    scrollable={{scrollbar: false}}
                    theme={{
                        primary: 'orange',
                        secondary: 'black',
                        cardBgColor: 'white',
                        titleColor: 'black',
                        titleColorActive: 'orange',
                    }}
                    buttonTexts={{
                        first: 'Jump to First',
                        last: 'Jump to Last',
                        next: 'Next',
                        previous: 'Previous',
                    }}
                    fontSizes={{
                        cardSubtitle: '0.85rem',
                        cardText: '0.8rem',
                        cardTitle: '1rem',
                        title: '1rem',
                    }}
                    useReadMore={true}
                    classNames={{
                        card: 'chrono-timeline-card-content',
                        cardMedia: 'chrono-card-media', // Define this in your CSS if needed
                        cardSubTitle: 'chrono-timeline-card-subtitle',
                        cardText: 'chrono-timeline-card-detail',
                        cardTitle: 'chrono-timeline-card-title',
                        controls: 'chrono-timeline-button', // Define this in your CSS if needed
                        title: 'chrono-title',
                    }}
                    //cardHeight={300}
                />

            </div>
        );
    }
}

export default ExperienceTimeline;
