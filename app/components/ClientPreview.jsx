import { Link } from "@remix-run/react";

export default function Client({ avatar, id, name, title }) {
    return (
        <div className="client">
            <img alt={name} className="avatar" height={50} src={avatar} width={50} />
            <div className="client-summary">
                <Link
                    className="client-name"
                    dangerouslySetInnerHTML={{ __html: name }}
                    prefetch="intent"
                    to={`/client/${id}`}
                />
                <p className="client-title">{title}</p>
            </div>
        </div>
    )
}