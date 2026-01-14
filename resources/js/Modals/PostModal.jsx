export default function PostModal({ setHidden }) {
    return (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-3xl max-h-full mx-auto">
                <div className="relative bg-[var(--accent)] border border-black rounded-lg shadow-sm p-4 md:p-6">
                    <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                        <h3 className="text-lg font-bold text-[var(--accent-text)]">
                            Create a new Post
                        </h3>
                    </div>
                    <div className="space-y-4 md:space-y-6 py-4 md:py-6">
                        <label className="text-xl">Title:</label>
                        <input
                            type="text"
                            placeholder="Enjoy our all time favorite breads!"
                            className="rounded-xl px-2 py-1 w-full bg-[var(--secondary)] max-sm:py-2 text-[var(--accent-text)]"
                        />
                    </div>
                    <div className="space-y-4 md:space-y-6 py-4 md:py-6">
                        <label className="text-xl">Description:</label>
                        <textarea
                            type="text"
                            placeholder="Describe your post"
                            className="rounded-xl px-2 py-1 w-full bg-[var(--secondary)] max-sm:py-2 text-[var(--accent-text)]"
                        ></textarea>
                    </div>
                    <div className="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                        <div className="flex-1"></div>
                        <button
                            type="button"
                            onClick={setHidden}
                            className="button-secondary"
                        >
                            Cancel
                        </button>
                        <button type="button" className="button-primary">
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
