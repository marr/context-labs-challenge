import { Form, useSearchParams } from '@remix-run/react';

export default function ClientSearch() {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleChange = (e) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(e.target.name, e.target.value);
        setSearchParams(newSearchParams);
    };
    return (
        <Form>
            <input
                autoComplete='off'
                className="client-search"
                defaultValue={searchParams.get('q')}
                name="q"
                placeholder="Search clients..."
                type="search"
                onChange={handleChange}
            />
        </Form>
    );
}