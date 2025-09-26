import MetricCard from '../MetricCard/MetricCard';
import './Overview.scss';
import { Person, Assessment, CheckCircle } from '@mui/icons-material';

const Overview = () => {
    const metrics = [
        {
            icon: <Person sx={{ color: '#846DD3', fontSize: '2rem' }} />,
            iconBg: '#EED7FF',
            title: '30', /* متغیر */
            subtitle: 'Assigned students',
            link: '/students',
        },
        {
            icon: <Assessment sx={{ color: '#FEFEFE', fontSize: '2rem' }} />,
            iconBg: '#FFD279',
            title: '125', /* متغیر */
            subtitle: 'Reports written',
            link: '/reports',
        },
        {
            icon: <CheckCircle sx={{ color: '#40CF8D', fontSize: '2rem' }} />,
            iconBg: '#B9F8D0',
            title: '5', /* متغیر */
            subtitle: 'Pending Reports',
            link: '/reports',
        },
    ];

    return (
        <div className="overview">
            <h2 className="overview-title">Overview</h2>
            <div className="metrics-container">
                {metrics.map((metric, index) => (
                    <MetricCard
                        key={index}
                        icon={metric.icon}
                        iconBg={metric.iconBg}
                        title={metric.title}
                        subtitle={metric.subtitle}
                        link={metric.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Overview;