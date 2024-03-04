import JobListItem from './JobListItem';
import { JobItem } from './JobListItem';

export function JobList({ jobItems }: { jobItems: JobItem[] }) {
  return (
    <ul className='job-list'>
      {jobItems.map((jobItem) => (
        <JobListItem jobItem={jobItem} />
      ))}
    </ul>
  );
}

export default JobList;
