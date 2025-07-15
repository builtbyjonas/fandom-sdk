# Contributing to fandom-sdk

Thank you for your interest in contributing to fandom-sdk! We welcome contributions from the community.

## Getting Started

### Prerequisites

- Node.js 14.0.0 or higher
- npm, yarn, pnpm, or bun
- Git

### Setting Up the Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/fandom-sdk.git
   cd fandom-sdk
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```
4. Build the project:
   ```bash
   npm run build
   ```

## Development Workflow

### Making Changes

1. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-fix-name
   ```

2. Make your changes following our coding standards
3. Test your changes thoroughly
4. Commit your changes with descriptive messages

### Code Style

- We use Prettier for code formatting
- TypeScript strict mode is enabled
- Follow existing code patterns and conventions
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### Testing

- Add tests for new features
- Ensure existing tests pass
- Test with different Fandom wikis
- Verify error handling works correctly

### Documentation

- Update README.md if needed
- Add JSDoc comments for new public methods
- Update type definitions
- Add examples for new features

## Pull Request Process

1. **Before submitting**: Ensure your changes are ready
   - [ ] Code follows style guidelines
   - [ ] Tests pass locally
   - [ ] Documentation is updated
   - [ ] No breaking changes (or properly documented)

2. **Submit PR**: Create a pull request with:
   - Clear title and description
   - Reference related issues
   - List changes made
   - Screenshots (if applicable)

3. **Review process**:
   - Automated checks will run
   - Maintainers will review your code
   - Address any feedback
   - Once approved, your PR will be merged

## Types of Contributions

### Bug Reports

- Use the bug report template
- Include reproduction steps
- Provide environment details
- Add relevant error messages

### Feature Requests

- Use the feature request template
- Explain the use case
- Describe expected behavior
- Consider implementation complexity

### Code Contributions

- Bug fixes
- New features
- Performance improvements
- Documentation improvements

### Other Contributions

- Improving documentation
- Adding examples
- Answering questions in discussions
- Helping with issue triage

## Coding Standards

### TypeScript

- Use strict TypeScript configuration
- Prefer interfaces over types where appropriate
- Use proper type annotations
- Avoid `any` type unless absolutely necessary

### API Design

- Follow existing patterns
- Maintain backward compatibility
- Use consistent naming conventions
- Provide clear error messages

### Error Handling

- Use appropriate error types
- Provide helpful error messages
- Don't expose sensitive information
- Log errors appropriately

## Release Process

Releases are handled by maintainers:

1. Version bump following [Semantic Versioning](https://semver.org/)
2. Update CHANGELOG.md
3. Create release tag
4. Automated publication to npm

## Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Help newcomers learn
- Focus on constructive feedback
- Maintain professionalism

### Communication

- Use GitHub Discussions for questions
- Use Issues for bug reports and feature requests
- Be patient and helpful
- Follow up on your contributions

## Getting Help

- **Documentation**: Check the README and examples
- **Discussions**: Use GitHub Discussions for questions
- **Issues**: Search existing issues first
- **Discord/Slack**: [Add community links if available]

## Recognition

Contributors will be:

- Listed in the project's contributors section
- Mentioned in release notes (for significant contributions)
- Invited to join the contributors team (for ongoing contributors)

## Legal

By contributing to fandom-sdk, you agree that your contributions will be licensed under the same license as the project (BSL-1.0).

---

Thank you for contributing to fandom-sdk! 🚀
