"use client" 

import React from 'react';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useQueryClient } from 'react-query';
import { FiLogOut } from 'react-icons/fi';

const LogOutUser = () => {
    const { user } = useAuth();
    const { logout, reset } = useActions();
    const queryClient = useQueryClient();

    const handleLogout = async () => {
        await logout();

        queryClient.invalidateQueries({ queryKey: ['user'] });
        reset()
    };

    return (
        <>
            {user && (
                <button onClick={handleLogout}>
                    <FiLogOut />
                </button>
            )}
        </>
    );
};

export default LogOutUser;

