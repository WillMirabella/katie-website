export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          I&apos;d love to hear from you! Whether you want to chat about travel, 
          share thoughts on my essays, or just say hello, feel free to reach out.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-primary-light/30 p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Let&apos;s Connect</h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              I believe in the power of meaningful conversations and authentic connections. 
              Don&apos;t hesitate to reach out if something I&apos;ve written resonates with you, 
              if you have travel recommendations to share, or if you simply want to connect 
              with a fellow wanderer and storyteller.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <a 
                    href="mailto:your.sister@email.com" 
                    className="text-primary-medium hover:text-primary-medium/80 transition-colors"
                  >
                    your.sister@email.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-medium" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.404-5.965 1.404-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Instagram</h3>
                  <a 
                    href="https://instagram.com/yourusername" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-medium hover:text-primary-medium/80 transition-colors"
                  >
                    @yourusername
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary-medium" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-medium hover:text-primary-medium/80 transition-colors"
                  >
                    /in/yourusername
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-light/20 to-accent-light/30 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              What I&apos;d Love to Hear About
            </h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-medium mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Your own travel stories and adventures
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-medium mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Feedback on my writing and essays
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-medium mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Book recommendations and reading lists
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-medium mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Hidden gems and off-the-beaten-path destinations
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-medium mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Collaborations or creative projects
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}