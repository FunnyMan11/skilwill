// Function to fetch posts from API
async function fetchPosts() {
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    const postsContainer = document.getElementById('posts-container');
    
    // Show loading state
    loadingDiv.style.display = 'block';
    errorDiv.style.display = 'none';
    postsContainer.innerHTML = '';
    
    try {
        // Fetch data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();
        
        // Hide loading state
        loadingDiv.style.display = 'none';
        
        // Display posts in DOM
        displayPosts(posts);
        
    } catch (error) {
        // Hide loading state and show error
        loadingDiv.style.display = 'none';
        errorDiv.style.display = 'block';
        errorDiv.innerHTML = `Error fetching posts: ${error.message}`;
        console.error('Error:', error);
    }
}

// Function to display posts in DOM
function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    
    // Limit to first 10 posts for better display
    const limitedPosts = posts.slice(0, 10);
    
    postsContainer.innerHTML = limitedPosts.map(post => `
        <div class="post">
            <div class="post-title">${post.title}</div>
            <div class="post-body">${post.body}</div>
            <div class="post-meta">
                <span class="post-id">Post #${post.id}</span>
                <span class="user-id">User #${post.userId}</span>
            </div>
        </div>
    `).join('');
}

// Load posts when page loads
window.addEventListener('load', fetchPosts);
