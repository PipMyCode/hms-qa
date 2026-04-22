# Test Authoring Checklist

Before adding a test:
- What user risk does this test reduce?
- Is this better as API or E2E?
- What data/state does it need?

When writing:
- Use stable selectors
- Avoid hard sleeps
- Add positive and negative paths
- Tag test with domain and purpose

Before merging:
- Passes locally 3 times
- Fails meaningfully when behavior breaks
- Adds useful report evidence
