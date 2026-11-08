document.addEventListener('DOMContentLoaded', () => {
    // Accordion Toggle for FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isOpen = answer.style.display === 'block';
            
            // Close other items
            faqItems.forEach(other => {
                other.querySelector('.faq-answer').style.display = 'none';
                const icon = other.querySelector('.faq-icon');
                if (icon) icon.textContent = '+';
            });

            if (!isOpen) {
                answer.style.display = 'block';
                const icon = item.querySelector('.faq-icon');
                if (icon) icon.textContent = '−';
            }
        });
    });

    // Default open first FAQ item
    if (faqItems.length > 0) {
        const firstAnswer = faqItems[0].querySelector('.faq-answer');
        if (firstAnswer) firstAnswer.style.display = 'block';
        const firstIcon = faqItems[0].querySelector('.faq-icon');
        if (firstIcon) firstIcon.textContent = '−';
    }
});
