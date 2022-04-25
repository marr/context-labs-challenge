import { Link } from "@remix-run/react";

export default function Client({ avatar, id, name, title }) {
    return (
        <div className="client">
            <img alt={name} className="avatar" src={avatar} />
            <div className="client-summary">
                <Link className="client-name" dangerouslySetInnerHTML={{ __html: name }} to={`/client/${id}`} />
                <p className="client-title">{title}</p>
            </div>
        </div>
    )
}