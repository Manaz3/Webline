import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
className?: string
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        export const Loader = ({className}: LoaderProps) => {
        return (
            <div className={classNames('loader')}>

            </div>
        );
        }

        export default Loader; 