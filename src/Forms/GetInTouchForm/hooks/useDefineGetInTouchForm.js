import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { talkWithUsSchema } from '../schema/TalkWithUsSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export const useDefineGetInTouchForm = () => {
    // Define form using zod schema
    const form = useForm({
        resolver: zodResolver(talkWithUsSchema),
        defaultValues: {
            // Add default values for your fields here if needed
            name: '',
            email: '',
            mobile: '',
            location: '',
            message: '',
        },
    });

    // Destructure the form state
    const { formState: { isSubmitting,isDirty} } = form;

    // Return form and form state
    return {
        form,
        isSubmitting,
        isDirty
    };
};
