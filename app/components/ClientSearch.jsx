import { Form, useSearchParams } from '@remix-run/react';
import debounce from 'lodash/debounce';

export default function ClientSearch() {
    const [searchParams, setSearchParams] = useSearchParams();
    const handleChange = debounce((e) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(e.target.name, e.target.value);
        setSearchParams(newSearchParams);
    }, 325);
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