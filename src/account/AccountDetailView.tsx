import React from 'react';
import { useParams } from 'react-router-dom';

const AccountDetailView: React.FC = (): JSX.Element => {
    const params = useParams();
    return (
        <div>
            {`View Account ID "${params.id}"`}
        </div>
    );
};

export default AccountDetailView;
