ew
Repositories 27
Projects 2
Packages
Get started with GitHub Packages
# Step 1: Authenticate
$ echo ":github: Bearer GH_TOKEN" >> ~/.gem/credentials
# Step 2: Build
$ gem build repository-name.gemspec
# Step 3: Publish
$ gem push --key github --host https://rubygems.pkg.github.com/Sub-Olahoop repository-name-1.0.0.gem
