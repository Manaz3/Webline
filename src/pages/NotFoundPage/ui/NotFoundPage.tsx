import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next';



interface NotFoundPageProps {
className?: string
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        export const NotFoundPage = ({className}: NotFoundPageProps) => {
            const { t } = useTranslation();  
        return (
            <div className={classNames(cls.NotFoundPage)}>
                {t('Страница не найдена')}
            </div>
        );
        }

        export default NotFoundPage; 