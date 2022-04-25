import slugify from 'slugify';

export default (str) => slugify(str.replace(/(<([^>]+)>)/ig, ''), { lower: true });