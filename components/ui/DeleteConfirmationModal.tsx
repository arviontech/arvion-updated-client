'use client';

import { AlertTriangle, Loader2 } from 'lucide-react';

interface DeleteConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message?: string;
    itemName?: string;
    isLoading?: boolean;
}

const DeleteConfirmationModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = 'Delete Item',
    message = 'Are you sure you want to delete this item? This action cannot be undone.',
    itemName,
    isLoading = false,
}: DeleteConfirmationModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl transform transition-all scale-100 animate-in zoom-in-95 duration-200">
                <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                        <AlertTriangle className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900">
                            {title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {message}
                            {itemName && (
                                <span className="block mt-1 font-medium text-gray-900">
                                    "{itemName}"
                                </span>
                            )}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 w-full pt-4">
                        <button
                            onClick={onClose}
                            disabled={isLoading}
                            className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            disabled={isLoading}
                            className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 font-medium transition-colors shadow-lg shadow-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Deleting...
                                </>
                            ) : (
                                'Delete'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
