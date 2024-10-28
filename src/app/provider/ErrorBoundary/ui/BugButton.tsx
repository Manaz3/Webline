import { classNames } from '@/shared/lib/classNames/classNames';
import Button from '@/shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования ErrorBoundary

interface BugButtonProps {
    className?: string
}
// eslint-disable-line no-unused-vars
export const BugButton = ({className}: BugButtonProps) => {
    console.log(className)

    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const throwError = () => setError(true)

    useEffect(() => {
        if (error === true) throw new Error();
    }, [error])

    return (
        <Button className={classNames('')}
                onClick={throwError}>
            {t('Отправить ошибку')}
        </Button>
    );
}

export default BugButton; 