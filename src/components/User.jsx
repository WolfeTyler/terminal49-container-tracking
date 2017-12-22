import React from 'react';
import { Link } from 'react-router';

class User extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://my-json-server.typicode.com/wolfetyler/Terminal49-Track/users/${this.props.params.username}`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
    }

    renderStat(stat) {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                </Link>
            </li>
        );
    }

    render() {
        if (!this.state.user) {
            return (<div className="user-page">Loading...</div>);
        }

        const user = this.state.user;

        return (
            <div className="user-page">
                <div className="user-info">
                    <div>
                        <h1 className="user-info__title">B/L Number: {user.booking_number}</h1>
                        <p className="user-info__bio"></p>
                        <p className="user-info__bio">Steamship Line: {user.steamship_line}</p>
                        <p className="user-info__bio">Origin: {user.origin}</p>
                        <p className="user-info__bio">Destination: {user.destination}</p>
                        <p className="user-info__bio">Vessel: {user.vessel}</p>
                        <p className="user-info__bio">Vessel ETA: {user.vessel_eta}</p>
                        <p className="user-info__bio"></p>
                        <div>
                          <p className="user-info__bio">Containers: {user.number}</p>
                          <p className="user-info__bio">Size: {user.size}</p>
                          <p className="user-info__bio">Type: {user.type}</p>
                          <p className="user-info__bio">Last Status: {user.last_status}</p>
                          <p className="user-info__bio">Location: {user.location}</p>
                          <p className="user-info__bio">Status Time: {user.last_status_at}</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
};

export default User;
