import JobListItem from './JobListItem';
import { JobItem } from './JobListItem';
import Spinner from './Spinner';

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export function JobList({ jobItems, isLoading }: JobListProps) {
  return (
    <ul className='job-list'>
      {isLoading && <Spinner />}

      {!isLoading &&
        jobItems.map((jobItem) => <JobListItem jobItem={jobItem} />)}
    </ul>
  );
}

export default JobList;
